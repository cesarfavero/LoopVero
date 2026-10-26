# `readFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/local-attachment-store.ts` · [README do módulo](../../../../../modules/core/evals/local-attachment-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:595980-595987](../../../../../../reference/runtime/sand-eval-runner.cjs#L595980-L595987) | `FunctionDeclaration` | não | `sourcePath2, error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595980-595987](../../../../../../reference/runtime/sand-eval-runner.cjs#L595980-L595987) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:595980

Chamadas escritas diretamente neste corpo: `new SandToolInputError`.

SHA-256 do trecho: `8b5a8f626fb6ecd0cbee8cf984ad91f7fcd7f7ce7e4530b0f175b7f6582e4638`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
