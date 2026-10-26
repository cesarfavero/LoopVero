# `toSectionLabel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-prefix-observation.ts` · [README do módulo](../../../../../modules/core/runner/prompt-prefix-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:546600-546602](../../../../../../reference/runtime/sand-eval-runner.cjs#L546600-L546602) | `FunctionDeclaration` | não | `change` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:546600-546602](../../../../../../reference/runtime/sand-eval-runner.cjs#L546600-L546602) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:546600

Chamadas escritas diretamente neste corpo: `change.slice`, `change.startsWith`.

SHA-256 do trecho: `adcaba1903f1cab46868d95a0976b6267adbe1122004a86e9af2d582f887857f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
