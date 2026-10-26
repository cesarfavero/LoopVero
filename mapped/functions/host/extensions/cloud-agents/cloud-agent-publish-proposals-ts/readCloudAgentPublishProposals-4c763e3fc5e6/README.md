# `readCloudAgentPublishProposals`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-publish-proposals.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-publish-proposals-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:537808-537823](../../../../../../../reference/runtime/host-main.cjs#L537808-L537823) | `FunctionDeclaration` | sim | `client, bcId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537808-537823](../../../../../../../reference/runtime/host-main.cjs#L537808-L537823) | 3 | 0 | 2 | 4 | 0 | 1 |

### host:537808

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `classifyReadFailure`, `client.listPublishProposals`, `isNotFound`, `isPublishNotConfiguredError`, `isRunGone`, `listed.map`, `new ListPublishProposalsRequest`.

Alvos de atribuição ou incremento: `listed`.

SHA-256 do trecho: `f0afd6a77816b6d478b082a6d8e0542319137e6d8e06a49d855f74df732c3d92`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
