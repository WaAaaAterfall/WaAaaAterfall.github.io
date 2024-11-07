---
layout: page
title: Glow-SPLAT
description: Discovering neuronal ensembles from calcium imaging on sparse neural population dynamics
img: assets/img/splat_plot.pdf
importance: 1
category: PhD Work
related_publications: false
---

With the advent of large-scale neuronal recordings in neuroscience research, which reveal the correlated nature of neuronal activity, researchers have begun to explore whether these correlations suggest an underlying lower-dimensional brain structure that can be uncovered from high-dimensional neural data. This question aligns with the manifold hypothesis in machine learning, which suggests that high-dimensional data often lie on a lower-dimensional manifold, suggesting a similar approach could be applied to the brain's data. This brings us to a problem in computational neuroscience: How can dimensionality reduction be applied to compress neural data in ways that enhance our understanding of brain function?

To address the challenge of discovering low-dimensional patterns in large-scale neural data, Pearson lab has previously developed SPLAT (Sparse Pattern Learning Across Time), a model designed to uncover neural ensemble patterns from spike counts recordings. Building on this work, I am now extending this model to handle calcium imaging data—an increasingly popular method for monitoring neural population activity at scale. This extension allows SPLAT to analyze new types of data while preserving its strengths in dimensionality reduction.

Glow-SPLAT, named for the glowing calcium signals captured under the microscope, extends SPLAT to handle calcium imaging data. This statistical generative model leverages an Expectation-Maximization (EM) framework for efficient learning. It incorporates particle filtering (sequential Monte Carlo) in the E-step and gradient descent in the M-step. Implemented in JAX, Glow-SPLAT takes full advantage of GPU acceleration, which is critical for rapidly fitting the model to large-scale neural data.

One of the key features of both SPLAT and Glow-SPLAT is their ability to operate in a streaming framework. This makes the models particularly well-suited for adaptive experiments, where experimental parameters can be adjusted dynamically based on incoming data. At present, Glow-SPLAT can analyze data from thousands of neurons faster than the rate of data acquisition, offering new possibilities for interpreting neural activity patterns in real-time and guiding future neuroscience research.

