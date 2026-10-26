# `matchesSignature`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/bot-block-detection.ts` · [README do módulo](../../../../../modules/core/runner/bot-block-detection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484439-484441](../../../../../../reference/runtime/sand-eval-runner.cjs#L484439-L484441) | `FunctionDeclaration` | não | `signature, page` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484439-484441](../../../../../../reference/runtime/sand-eval-runner.cjs#L484439-L484441) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484439

Chamadas escritas diretamente neste corpo: `matchesHost`, `matchesPath`, `matchesTitle`.

SHA-256 do trecho: `4bed34bc6838d7db8650ec96c0c469f81751c4ad046f9e6fab394abb805137b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
