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

In adaptive experiments, where experimental parameters are adjusted in real time, studying brain circuits requires modifying stimuli based on the immediate behavioral response. This necessitates real-time evaluation of the current brain network state to ensure that stimuli can be adjusted dynamically during the experiment. The ability to observe the network state in vivo improves the accuracy of inferring causal relationships between stimuli and neural dynamics, underscoring the need for fast, real-time decoding methods to track neural network states as experiments progress.

The algorithm I'm currently working on, #Glow-SPLAT# (sparse pattern learning across time), is designed to fit into the real-time experiment setting. It is a streaming generative algorithm that focuses on learning lower-dimensional latent neural ensemble patterns from large-scale neural population activity recorded by calcium imaging. Glow-SPLAT is an extended work from the model SPLAT developed in Pearson Lab (Gupta, Alston, and Pearson, in prep). Unlike the original SPLAT model which was designed for discrete spike count data, Glow-SPLAT is adapted for continuous calcium imaging, requiring a different modeling approach due to the temporal nature of the data.

Glow-SPLAT operates in a streaming framework, enabling it to process incoming recordings continuously and optimize the inference of neural activity patterns in real time. This allows researchers to adjust experimental settings dynamically, therefore optimizing the outcomes by refining stimuli responses based on live data.

Glow-SPLAT and SPLAT have broad applications in neuroscience research. For example, one major challenge in the field is understanding how neural systems compute and process information. Modelling neuronal circuits provides a framework to explain how input information regulates neural response, which in turn drive output behavior. In this context, the dimensionality of neural systems is critical, as it helps describe the complexity and the nature of neural responses to stimuli.
