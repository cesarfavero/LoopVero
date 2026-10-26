# `turnMemoryProvenance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/turn-memory.ts` · [README do módulo](../../../../../modules/core/runner/turn-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590591-590594](../../../../../../reference/runtime/sand-eval-runner.cjs#L590591-L590594) | `FunctionDeclaration` | não | `ctx, source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590591-590594](../../../../../../reference/runtime/sand-eval-runner.cjs#L590591-L590594) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590591

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `161547a988b2ddda7f089d7272292cb17e89bc64ff7d85d8dfbce2c8adc274f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
