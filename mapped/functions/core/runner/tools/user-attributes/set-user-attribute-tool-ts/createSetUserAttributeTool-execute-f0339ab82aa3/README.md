# `createSetUserAttributeTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-attributes/set-user-attribute-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/user-attributes/set-user-attribute-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771513-771524](../../../../../../../../reference/runtime/host-main.cjs#L771513-L771524) | `ArrowFunctionExpression` | sim | `ctx, write4, d` |
| [evaluation:570746-570757](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570746-L570757) | `ArrowFunctionExpression` | sim | `ctx, write2, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771513-771524](../../../../../../../../reference/runtime/host-main.cjs#L771513-L771524) | 0 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:570746-570757](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570746-L570757) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:771513

Chamadas escritas diretamente neste corpo: `attributeSets.increment`, `d.requestSource`, `d.userAttributes.set`, `errorLogTag`, `logger122.warn`.

SHA-256 do trecho: `0b4eab138b3a1e3f4a85a647624592fc279e29deddeefe5f2d1849218cb94814`.

### evaluation:570746

Chamadas escritas diretamente neste corpo: `attributeSets.increment`, `d.requestSource`, `d.userAttributes.set`, `errorLogTag`, `logger95.warn`.

SHA-256 do trecho: `84392d65a447e799e9e52d1333aac4ea3f5f939ab57724f2236ce750bb28fbbf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
