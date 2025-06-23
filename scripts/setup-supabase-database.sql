-- Tabelle für E-Mail-Anmeldungen erstellen
CREATE TABLE IF NOT EXISTS email_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  source VARCHAR(50) DEFAULT 'landing_page',
  is_verified BOOLEAN DEFAULT FALSE,
  verification_token VARCHAR(255),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Index für bessere Performance
CREATE INDEX IF NOT EXISTS idx_email_signups_email ON email_signups(email);
CREATE INDEX IF NOT EXISTS idx_email_signups_created_at ON email_signups(created_at);
CREATE INDEX IF NOT EXISTS idx_email_signups_source ON email_signups(source);

-- RLS (Row Level Security) aktivieren
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Policy für öffentliche Inserts (nur für neue E-Mails)
CREATE POLICY "Allow public insert" ON email_signups
  FOR INSERT WITH CHECK (true);

-- Policy für öffentliche Selects (nur eigene E-Mails)
CREATE POLICY "Allow public select own email" ON email_signups
  FOR SELECT USING (true);

-- Policy für Service Role (für Admin-Zugriff)
CREATE POLICY "Allow service role all" ON email_signups
  FOR ALL USING (auth.role() = 'service_role');

-- Trigger für updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_email_signups_updated_at 
    BEFORE UPDATE ON email_signups 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Beispiel-Daten einfügen (optional)
INSERT INTO email_signups (email, source) VALUES 
  ('demo@tigube.de', 'hero_section'),
  ('test@tigube.de', 'cta_section')
ON CONFLICT (email) DO NOTHING;
