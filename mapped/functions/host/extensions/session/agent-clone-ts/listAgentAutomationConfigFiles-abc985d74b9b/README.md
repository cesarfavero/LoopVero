# `listAgentAutomationConfigFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-clone.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-clone-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716877-716893](../../../../../../../reference/runtime/host-main.cjs#L716877-L716893) | `FunctionDeclaration` | não | `automationsDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716877-716893](../../../../../../../reference/runtime/host-main.cjs#L716877-L716893) | 2 | 1 | 0 | 2 | 0 | 1 |

### host:716877

Chamadas escritas diretamente neste corpo: `configs.push`, `entry.isDirectory`, `reportFallbackUnlessAbsent`.

Alvos de atribuição ou incremento: `entries`.

SHA-256 do trecho: `90b97ff8c8aad0f8ab3d578e1204c0a00f78af381343d587cddbb468e6367490`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
