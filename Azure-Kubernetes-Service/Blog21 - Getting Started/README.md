# Azure Kubernetes Service (AKS)

Azure offers hosted kubernetes service wherein it manages  kubernetes master nodes for you and you are responsible for managing worker nodes (VMs on which your workdloads are hosted).

Master nodes are also referred as Control Plane where as worker nodes are referred to as Data plane of kubernetes.

This reduces much of complexity and operational overhead of managing kubernetes control plane and keeping it running in a high available and secure environment setup. Azure takes care of critical tasks like health monitoring and maintenance for us in the event of any issues encountered while running kubernetes clusters.

#### Advanced Features
You can configure additional features like Advanced Networking, Azure Active Directory integration and Monitoring.

#### Security
For advanced security, Azure integrates with Kubernetes RBAC. RBAC lets you control access to kubernetes resources and namespaces and permission to those resources.

With Kubernetes AD integation, its Users and Groups can be provided access to AKS resources with an integrated sign-in experience.

#### Integrated Logging & Monitoring
Container logs and metrics are collected by __Azure Monitor for Containers__. This monitoring data is stored in Azure Log Analytics workspace

#### Nodepools
AKS supports Kubernetes clusters that run multiple node pools

#### Scaling
You can use Horizontal Pod Autoscaler for scaling Pods and Cluster Autoscaler for scaling Nodes. AKS takes care of both, scaling up and down depending on load and conditions configured.

#### Cluster Image
![Cluster](./1-cluster.JPG)

#### Steps to Create Cluster

1. Create Resource Group
2. Create Log Analytics Workspace
3. Create Service Principal
4. Create Cluster


## Create Kubernetes Cluster
1. Click __Create Kubernetes service__ button
2. 







