# `limitParameter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778056-778060](../../../../../../../reference/runtime/host-main.cjs#L778056-L778060) | `FunctionDeclaration` | não | `limits` |
| [evaluation:577791-577795](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577791-L577795) | `FunctionDeclaration` | não | `limits` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778056-778060](../../../../../../../reference/runtime/host-main.cjs#L778056-L778060) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577791-577795](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577791-L577795) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778056

Chamadas escritas diretamente neste corpo: `.describe`, `.int`, `.min`, `.optional`, `external_exports2.number`.

SHA-256 do trecho: `dc770ca6c4224db63f2d2f655faf23430f1f6d40e36195c8891c83d6726a676e`.

### evaluation:577791

Chamadas escritas diretamente neste corpo: `.describe`, `.int`, `.min`, `.optional`, `external_exports3.number`.

SHA-256 do trecho: `79c002c09913fbb76c7efc1723da1aad14f2f86f6d47e5af5827e145fef980f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
