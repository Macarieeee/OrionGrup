alter table public.portfolio_projects
  add column if not exists title_en text null,
  add column if not exists badge_label_en text null,
  add column if not exists portfolio_description_en text null,
  add column if not exists main_description_en text null,
  add column if not exists site_title_en text null default 'From Site to Reality',
  add column if not exists site_description_en text null;

comment on column public.portfolio_projects.title is 'Romanian project title.';
comment on column public.portfolio_projects.title_en is 'English project title.';
comment on column public.portfolio_projects.badge_label is 'Romanian project badge label.';
comment on column public.portfolio_projects.badge_label_en is 'English project badge label.';
comment on column public.portfolio_projects.portfolio_description is 'Romanian short description shown on the portfolio listing page.';
comment on column public.portfolio_projects.portfolio_description_en is 'English short description shown on the portfolio listing page.';
comment on column public.portfolio_projects.main_description is 'Romanian main description shown on the project detail page.';
comment on column public.portfolio_projects.main_description_en is 'English main description shown on the project detail page.';
comment on column public.portfolio_projects.site_title is 'Romanian title for the site/progress section.';
comment on column public.portfolio_projects.site_title_en is 'English title for the site/progress section.';
comment on column public.portfolio_projects.site_description is 'Romanian description for the site/progress section.';
comment on column public.portfolio_projects.site_description_en is 'English description for the site/progress section.';
