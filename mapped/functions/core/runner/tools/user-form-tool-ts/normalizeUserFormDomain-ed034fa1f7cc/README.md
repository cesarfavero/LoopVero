# `normalizeUserFormDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726248-726251](../../../../../../../reference/runtime/host-main.cjs#L726248-L726251) | `FunctionDeclaration` | não | `raw` |
| [evaluation:560866-560869](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560866-L560869) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726248-726251](../../../../../../../reference/runtime/host-main.cjs#L726248-L726251) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560866-560869](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560866-L560869) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726248

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `normalizeBoxHelpDomain`, `raw.trim`.

SHA-256 do trecho: `65974cbba172c432555910b76e4b6b7af62289fc71a5e89e2c064e8ab5987945`.

### evaluation:560866

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `normalizeBoxHelpDomain`, `raw.trim`.

SHA-256 do trecho: `65974cbba172c432555910b76e4b6b7af62289fc71a5e89e2c064e8ab5987945`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
