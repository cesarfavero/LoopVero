# `cardTextEntities`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/card-text.ts` · [README do módulo](../../../../../modules/shared/transcript/card-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706902-706905](../../../../../../reference/runtime/host-main.cjs#L706902-L706905) | `FunctionDeclaration` | não | `text3` |
| [evaluation:480999-481002](../../../../../../reference/runtime/sand-eval-runner.cjs#L480999-L481002) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706902-706905](../../../../../../reference/runtime/host-main.cjs#L706902-L706905) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480999-481002](../../../../../../reference/runtime/sand-eval-runner.cjs#L480999-L481002) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706902

Chamadas escritas diretamente neste corpo: `Array.from`, `new Set`, `text3.replace`, `visible.matchAll`.

SHA-256 do trecho: `519ed86a0661c499272ccf1442cf509052ac2b4841fd45fb79ff506649d422e9`.

### evaluation:480999

Chamadas escritas diretamente neste corpo: `Array.from`, `new Set`, `text3.replace`, `visible.matchAll`.

SHA-256 do trecho: `519ed86a0661c499272ccf1442cf509052ac2b4841fd45fb79ff506649d422e9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
