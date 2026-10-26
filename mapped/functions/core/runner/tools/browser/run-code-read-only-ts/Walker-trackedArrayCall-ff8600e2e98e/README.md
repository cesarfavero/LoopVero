# `Walker.trackedArrayCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/run-code-read-only.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750219-750249](../../../../../../../../reference/runtime/host-main.cjs#L750219-L750249) | `method` | não | `objKind, element, name18, args, scope` |
| [evaluation:523070-523100](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523070-L523100) | `method` | não | `objKind, element, name18, args, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750219-750249](../../../../../../../../reference/runtime/host-main.cjs#L750219-L750249) | 9 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:523070-523100](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523070-L523100) | 9 | 0 | 0 | 7 | 0 | 0 |

### host:750219

Chamadas escritas diretamente neste corpo: `args.forEach`, `arrayOf`, `fail2`, `isDataLike`, `isObjectKind`, `own2`.

SHA-256 do trecho: `8e5d2e3275e0d9b42d65ec9e6d201046600b18f2a618fd175a7ac8bc2a0c5565`.

### evaluation:523070

Chamadas escritas diretamente neste corpo: `args.forEach`, `arrayOf2`, `fail`, `isDataLike`, `isObjectKind`, `own2`.

SHA-256 do trecho: `75ff3da07f1085664cb72c911d18519d16252bbfe4e8b9e388386cb4eec71544`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
