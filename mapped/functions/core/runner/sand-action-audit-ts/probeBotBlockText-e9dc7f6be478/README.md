# `probeBotBlockText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512547-512575](../../../../../../reference/runtime/sand-eval-runner.cjs#L512547-L512575) | `FunctionDeclaration` | sim | `ctx, remoteAccessor, displayNumber, targets, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512547-512575](../../../../../../reference/runtime/sand-eval-runner.cjs#L512547-L512575) | 2 | 0 | 2 | 4 | 0 | 1 |

### evaluation:512547

Chamadas escritas diretamente neste corpo: `.execute`, `botBlockTextProbeCommand`, `deps.buildShellArgs`, `deps.ensureBrowserDriver`, `errorLogTag`, `new Map`, `parseBotBlockTextProbeResult`, `process.stderr.write`, `remoteAccessor.get`, `targets.slice`.

SHA-256 do trecho: `4456cdde5a7e19acf2ca8773e0ff52f379a54b6bbf5f6960e773f1bb99c97f1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
