# `stripWordPunctuation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726282-726284](../../../../../../../reference/runtime/host-main.cjs#L726282-L726284) | `FunctionDeclaration` | não | `word` |
| [evaluation:560897-560899](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560897-L560899) | `FunctionDeclaration` | não | `word` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726282-726284](../../../../../../../reference/runtime/host-main.cjs#L726282-L726284) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560897-560899](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560897-L560899) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726282

Chamadas escritas diretamente neste corpo: `word.replace`.

SHA-256 do trecho: `b33e51848733b553f4affd06eb73198927b4385e3dabb25f05fa1be804cc985a`.

### evaluation:560897

Chamadas escritas diretamente neste corpo: `word.replace`.

SHA-256 do trecho: `b33e51848733b553f4affd06eb73198927b4385e3dabb25f05fa1be804cc985a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
