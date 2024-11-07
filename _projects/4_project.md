---
layout: page
title: Stock Exchange Simulation
description: A python stock exchange simulation that can handle requests from multiple players.
img: 
importance: 2
category: Software Development
related_publications: false
---

Collaborate with Fan Yang.

We implemented a multi-process stock server using python and SQLAlchemy. By setting different isolation levels, the simulator can handle concurrency and prevent deadlocks. We also ensured transactional atomicity with row-level locks and process locks.

We conducted scalability tests by setting up a multiprocessing pool to handle concurrent requests. We also established a robust testing framework to ensure the correctness of transaction matching under various load conditions.

Read more at the <a href="https://github.com/WaAaaAterfall/Stock_Exchange_Scalable">Github Repo</a>.