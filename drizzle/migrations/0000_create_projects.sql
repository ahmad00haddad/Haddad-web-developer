CREATE TABLE public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text,
  name text NOT NULL DEFAULT '',
  repo text NOT NULL DEFAULT '',
  url text NOT NULL DEFAULT '',
  "desc" text NOT NULL DEFAULT '',
  tech text[] NOT NULL DEFAULT '{}',
  image_url text,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.projects TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.projects TO authenticated;
GRANT ALL ON public.projects TO service_role;

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone"
  ON public.projects FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON public.projects FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON public.projects FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON public.projects FOR DELETE TO authenticated
  USING (true);

INSERT INTO public.projects (slug, name, repo, url, "desc", tech, order_index) VALUES
('memoria','Memoria','ahmad00haddad/memoria','https://github.com/ahmad00haddad/memoria','The premier platform for booking wedding photographers seamlessly. Built with a ''Don''''t Make Me Think'' philosophy, it transforms complex booking matrices into a delightful, zero-friction experience.', ARRAY['REACT','SUPABASE','TAILWIND'],0),
('nas-irbid','Nas Irbid','ahmad00haddad/nas-irbid','https://github.com/ahmad00haddad/nas-irbid','A living archive of Irbid city''s memory. Documenting stories of ordinary people and ancient professions through an interactive map and a cinematic documentary experience.', ARRAY['REACT','MAPS','FRAMER MOTION'],1),
('haddad-rate-card','Haddad Rate Card','ahmad00haddad/haddad-rate-card','https://github.com/ahmad00haddad/haddad-rate-card','A minimalist digital rate card providing an elegant breakdown of web development services and pricing for prospective clients.', ARRAY['REACT','TAILWIND','UI/UX'],2),
('petvan','PetVan','ahmad00haddad/petvan','https://github.com/ahmad00haddad/petvan','Revolutionizing pet care in Jordan. A premium mobile vet clinic & salon booking PWA with a cinematic glassmorphism design.', ARRAY['PWA','GLASSMORPHISM','REACT'],3),
('fazaa-jo','Fazaa-JO','ahmad00haddad/fazaa-jo','https://github.com/ahmad00haddad/fazaa-jo','An emergency help Progressive Web App. Instantly broadcast requests for roadside assistance, medical needs, or urgent rides to volunteers in your geo-fenced area.', ARRAY['REACT 18','SUPABASE','REACT QUERY'],4),
('lovable-production-hub','Lovable Production Hub','ahmad00haddad/lovable-production-hub','https://github.com/ahmad00haddad/lovable-production-hub','A centralized, real-time dashboard for film crews. Track project readiness, equipment status, and crew tasks instantly before the shoot day.', ARRAY['REACT','REALTIME','VITE'],5),
('faiihouse','Faii House','ahmad00haddad/faiihouse','https://github.com/ahmad00haddad/faiihouse','A cinematic, highly intelligent pricing engine built for a premier video production agency, turning a complex pricing matrix into a delightful mobile-first experience.', ARRAY['GSAP','JS','CSS GRID'],6),
('ahmadhaddad','Ahmad Haddad Portfolio','ahmad00haddad/ahmadhaddad','https://github.com/ahmad00haddad/ahmadhaddad','The source code for my personal digital portfolio and creative playground.', ARRAY['REACT','TAILWIND'],7),
('ababneh-security','Ababneh Security','ahmad00haddad/ababneh-security','https://github.com/ahmad00haddad/ababneh-security','Smart home guardian and security systems landing page with modern dark aesthetics.', ARRAY['UI/UX','WEB'],8),
('Haddad-web-developer','Digital Canvas','ahmad00haddad/Haddad-web-developer','https://github.com/ahmad00haddad/Haddad-web-developer','AI-powered digital canvas and creative experiments repository.', ARRAY['AI','REACT'],9),
('alfyaa','Alfyaa','ahmad00haddad/alfyaa','https://github.com/ahmad00haddad/alfyaa','E-commerce or enterprise solution interface built with modern web technologies.', ARRAY['REACT','TAILWIND'],10),
('jeeran','Jeeran','ahmad00haddad/jeeran','https://github.com/ahmad00haddad/jeeran','Community neighborhood application designed for hyper-local connectivity.', ARRAY['WEB','UI/UX'],11),
('mouj-studio','Mouj Studio','ahmad00haddad/mouj-studio','https://github.com/ahmad00haddad/mouj-studio','Creative agency portfolio showcasing brand identities, digital products, and cinematic experiences.', ARRAY['BRANDING','WEB'],12),
('alen-jaber','Alen Jaber','ahmad00haddad/alen-jaber','https://github.com/ahmad00haddad/alen-jaber','Personal brand portfolio for a creative professional, featuring minimalist typography.', ARRAY['REACT','DESIGN'],13);