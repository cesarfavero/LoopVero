# `hasUndeliveredTextAfter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-shape.ts` · [README do módulo](../../../../../modules/core/runner/turn-shape-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587208-587212](../../../../../../reference/runtime/sand-eval-runner.cjs#L587208-L587212) | `FunctionDeclaration` | não | `messages, index` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587208-587212](../../../../../../reference/runtime/sand-eval-runner.cjs#L587208-L587212) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587208

Chamadas escritas diretamente neste corpo: `.some`, `messages.slice`.

SHA-256 do trecho: `4ee483e24c3b955d185e2328d1e0bdabf2b869a18d94d97b3e9a942c1ea6f8e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
