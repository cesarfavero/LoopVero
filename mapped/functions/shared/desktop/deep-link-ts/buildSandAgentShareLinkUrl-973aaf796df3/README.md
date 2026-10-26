# `buildSandAgentShareLinkUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/deep-link.ts` · [README do módulo](../../../../../modules/shared/desktop/deep-link-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489462-489465](../../../../../../reference/runtime/host-main.cjs#L489462-L489465) | `FunctionDeclaration` | não | `agentId` |
| [evaluation:475598-475601](../../../../../../reference/runtime/sand-eval-runner.cjs#L475598-L475601) | `FunctionDeclaration` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489462-489465](../../../../../../reference/runtime/host-main.cjs#L489462-L489465) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:475598-475601](../../../../../../reference/runtime/sand-eval-runner.cjs#L475598-L475601) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:489462

Chamadas escritas diretamente neste corpo: `buildSandAgentDeepLinkUrl`.

SHA-256 do trecho: `420287f7264a9d5e0706afd9cea94250df6e9919bb120e084d02a9138163a104`.

### evaluation:475598

Chamadas escritas diretamente neste corpo: `buildSandAgentDeepLinkUrl`.

SHA-256 do trecho: `420287f7264a9d5e0706afd9cea94250df6e9919bb120e084d02a9138163a104`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
