# `_MeetingsTools.joiningIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773148-773152](../../../../../../reference/runtime/host-main.cjs#L773148-L773152) | `method` | não | `row, nowMs2` |
| [evaluation:572374-572378](../../../../../../reference/runtime/sand-eval-runner.cjs#L572374-L572378) | `method` | não | `row, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773148-773152](../../../../../../reference/runtime/host-main.cjs#L773148-L773152) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:572374-572378](../../../../../../reference/runtime/sand-eval-runner.cjs#L572374-L572378) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:773148

Chamadas escritas diretamente neste corpo: `Math.ceil`, `Math.max`.

SHA-256 do trecho: `a0faa80440c68a47ff672bd177dd3e90723f796fb0b67ae2f188ad4e0e4dc36c`.

### evaluation:572374

Chamadas escritas diretamente neste corpo: `Math.ceil`, `Math.max`.

SHA-256 do trecho: `61b615c3ae389798f63abd30e5a3033dbd0fabb38ae70c39b5ede65c6a4b262c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
