# `readPlaywrightSnapshotRefs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/user-form-playwright-context.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767557-767562](../../../../../../../../reference/runtime/host-main.cjs#L767557-L767562) | `FunctionDeclaration` | sim | `ctx, exec2, windowIndex` |
| [evaluation:563074-563079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563074-L563079) | `FunctionDeclaration` | sim | `ctx, exec2, windowIndex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767557-767562](../../../../../../../../reference/runtime/host-main.cjs#L767557-L767562) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563074-563079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563074-L563079) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767557

Chamadas escritas diretamente neste corpo: `mapRead`, `readPlaywrightTool`.

SHA-256 do trecho: `96b008812272f81849d9b0e4a4b9b7c53e7a0d1ce094cf1a2b333c14983989c8`.

### evaluation:563074

Chamadas escritas diretamente neste corpo: `mapRead`, `readPlaywrightTool`.

SHA-256 do trecho: `96b008812272f81849d9b0e4a4b9b7c53e7a0d1ce094cf1a2b333c14983989c8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
