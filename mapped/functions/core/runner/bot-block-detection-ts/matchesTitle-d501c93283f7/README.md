# `matchesTitle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/bot-block-detection.ts` · [README do módulo](../../../../../modules/core/runner/bot-block-detection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484426-484428](../../../../../../reference/runtime/sand-eval-runner.cjs#L484426-L484428) | `FunctionDeclaration` | não | `criteria, title` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484426-484428](../../../../../../reference/runtime/sand-eval-runner.cjs#L484426-L484428) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484426

Chamadas escritas diretamente neste corpo: `criteria.equals.includes`, `criteria.startsWith.some`.

SHA-256 do trecho: `37751c506b5f3d1538b18305cea0bfdef1cb18dd95498b8f95213fadedefd78a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
