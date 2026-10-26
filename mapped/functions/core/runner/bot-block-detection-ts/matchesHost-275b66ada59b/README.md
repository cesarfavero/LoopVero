# `matchesHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/bot-block-detection.ts` · [README do módulo](../../../../../modules/core/runner/bot-block-detection-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484420-484422](../../../../../../reference/runtime/sand-eval-runner.cjs#L484420-L484422) | `FunctionDeclaration` | não | `criteria, hostname3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484420-484422](../../../../../../reference/runtime/sand-eval-runner.cjs#L484420-L484422) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484420

Chamadas escritas diretamente neste corpo: `criteria.equals.includes`, `criteria.suffix.some`.

SHA-256 do trecho: `d7a94a8563290057d8ad1c195a4ab259aa1fe043a32e39824a5823e2203f2635`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
