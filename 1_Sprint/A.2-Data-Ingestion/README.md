# A.2-Data-Ingestion

**Purpose:** turn the evidence you already have into clean, indexed files the rest of the chain can read. You finish knowing what data you have, what is thin, and what is ready for jobs-to-be-done work. This stage is optional: if you have no data yet, go run some customer conversations first (see `5_Library/discovery/`).

**Typical time:** 30-90 minutes, depending on how much material you have.

## Inputs

- Anything you know about your customers and market, in any format, dropped into `5_Library/sources/raw/`: customer conversation notes or transcripts, sales or analytics exports, survey results, market and competitor research, supplier quotes, sample or prototype test results, spec sheets, regulatory documents, even photos of shelves or competitor packaging.
- The customer discovery tracker, if you have been using it.

## What you do by hand

- Gather your files into `5_Library/sources/raw/`. Subfolders are fine.
- Skim what the agent produces and correct anything it got wrong. It should preserve your evidence, not summarize it away.
- Decide what to do about the gaps it reports: more conversations, a missing data source, or a stage you can run on thin evidence.

## What the skill writes

`ingest-sources` converts each raw file into clean markdown or CSV in `5_Library/sources/processed/`, named by convention (see `5_Library/sources/README.md`), and updates `5_Library/wiki/INDEX.md` with what exists, what is thin, and what is ready. Pipeline skills read only from `processed/`.

## Done when

- Everything you want the chain to use is in `5_Library/sources/processed/`.
- You can say in one sentence what your evidence covers and where it is weakest.

This folder is your working space. You complete any template **by hand** and it stays here; the agent's derived markdown deliverable goes to `2_Outputs/.agents/A.2-Data-Ingestion/`.
