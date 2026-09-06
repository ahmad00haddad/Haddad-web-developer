CREATE POLICY "Anyone can read portfolio images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio_images');

CREATE POLICY "Authenticated can upload portfolio images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'portfolio_images');

CREATE POLICY "Authenticated can update portfolio images"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'portfolio_images');

CREATE POLICY "Authenticated can delete portfolio images"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'portfolio_images');