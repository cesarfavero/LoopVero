# `wallClockAtPlaceOrUtc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/tools/places/places-summary.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/places/places-summary-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768870-768880](../../../../../../../../reference/runtime/host-main.cjs#L768870-L768880) | `FunctionDeclaration` | não | `{   utcOffsetMinutes,   timeMs }` |
| [evaluation:564445-564455](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564445-L564455) | `FunctionDeclaration` | não | `{   utcOffsetMinutes,   timeMs }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768870-768880](../../../../../../../../reference/runtime/host-main.cjs#L768870-L768880) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564445-564455](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564445-L564455) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:768870

Chamadas escritas diretamente neste corpo: `.padStart`, `String`, `new Date`, `shifted.getUTCDay`, `shifted.getUTCHours`, `shifted.getUTCMinutes`.

SHA-256 do trecho: `851216dd6339464ce6354cbb4a07ce7c0f8fbc614e129c5557e5f08d9f5b71d5`.

### evaluation:564445

Chamadas escritas diretamente neste corpo: `.padStart`, `String`, `new Date`, `shifted.getUTCDay`, `shifted.getUTCHours`, `shifted.getUTCMinutes`.

SHA-256 do trecho: `851216dd6339464ce6354cbb4a07ce7c0f8fbc614e129c5557e5f08d9f5b71d5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
