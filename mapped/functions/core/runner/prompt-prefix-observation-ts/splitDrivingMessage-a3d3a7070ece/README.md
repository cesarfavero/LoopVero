# `splitDrivingMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546407-546418](../../../../../../reference/runtime/sand-eval-runner.cjs#L546407-L546418) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546407-546418](../../../../../../reference/runtime/sand-eval-runner.cjs#L546407-L546418) | 5 | 0 | 0 | 3 | 0 | 0 |

### evaluation:546407

Chamadas escritas diretamente neste corpo: `Array.isArray`, `content.findIndex`, `content.slice`, `contentForHash`, `partText`.

SHA-256 do trecho: `90a49708fe7e4e3c593b6d48ab7b5d8b8a68144748fd3a67f24965a51753e547`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
