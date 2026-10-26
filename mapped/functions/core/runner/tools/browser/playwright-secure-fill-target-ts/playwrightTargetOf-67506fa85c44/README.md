# `playwrightTargetOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-secure-fill-target.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-secure-fill-target-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724265-724287](../../../../../../../../reference/runtime/host-main.cjs#L724265-L724287) | `FunctionDeclaration` | não | `target, snapshotRefs` |
| [evaluation:560159-560181](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560159-L560181) | `FunctionDeclaration` | não | `target, snapshotRefs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724265-724287](../../../../../../../../reference/runtime/host-main.cjs#L724265-L724287) | 7 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:560159-560181](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560159-L560181) | 7 | 0 | 0 | 4 | 0 | 0 |

### host:724265

Chamadas escritas diretamente neste corpo: `PLAYWRIGHT_REF_TARGET_PATTERN.exec`, `snapshotRef.frameName.trim`, `snapshotRef.name.trim`, `snapshotRef.role.trim`, `snapshotRefs.get`, `target.trim`.

SHA-256 do trecho: `401a0528ad8d87a9267d7bdf9ffe1b1c16ec4ac9fdba3213c26715e59e9eb558`.

### evaluation:560159

Chamadas escritas diretamente neste corpo: `PLAYWRIGHT_REF_TARGET_PATTERN.exec`, `snapshotRef.frameName.trim`, `snapshotRef.name.trim`, `snapshotRef.role.trim`, `snapshotRefs.get`, `target.trim`.

SHA-256 do trecho: `401a0528ad8d87a9267d7bdf9ffe1b1c16ec4ac9fdba3213c26715e59e9eb558`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
