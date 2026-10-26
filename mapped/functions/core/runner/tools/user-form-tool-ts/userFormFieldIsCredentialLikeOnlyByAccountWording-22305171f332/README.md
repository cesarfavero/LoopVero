# `userFormFieldIsCredentialLikeOnlyByAccountWording`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726233-726236](../../../../../../../reference/runtime/host-main.cjs#L726233-L726236) | `FunctionDeclaration` | não | `field` |
| [evaluation:560851-560854](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560851-L560854) | `FunctionDeclaration` | não | `field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726233-726236](../../../../../../../reference/runtime/host-main.cjs#L726233-L726236) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560851-560854](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560851-L560854) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726233

Chamadas escritas diretamente neste corpo: `fieldSniffText`, `text3.replace`, `textLooksCredentialLike`.

SHA-256 do trecho: `2e0042e6c6586da13ff5678b8173a2fd67cded1f8d9550c5816faa4811e172fc`.

### evaluation:560851

Chamadas escritas diretamente neste corpo: `fieldSniffText`, `text3.replace`, `textLooksCredentialLike`.

SHA-256 do trecho: `2e0042e6c6586da13ff5678b8173a2fd67cded1f8d9550c5816faa4811e172fc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
