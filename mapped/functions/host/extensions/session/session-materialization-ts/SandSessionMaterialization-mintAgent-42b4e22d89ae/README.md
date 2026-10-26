# `SandSessionMaterialization.mintAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-materialization.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-materialization-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721429-721433](../../../../../../../reference/runtime/host-main.cjs#L721429-L721433) | `method` | sim | `mint2, providedId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721429-721433](../../../../../../../reference/runtime/host-main.cjs#L721429-L721433) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:721429

Chamadas escritas diretamente neste corpo: `this.enqueueMint`.

SHA-256 do trecho: `40e96e4ecd758b5d389e05c305f98b646f022b7c2acb3f1fb17c67f3b91ff4e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
