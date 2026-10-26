# `scanCaptchas`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512581-512624](../../../../../../reference/runtime/sand-eval-runner.cjs#L512581-L512624) | `FunctionDeclaration` | sim | `ctx, remoteAccessor, displayNumber, pages, deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512581-512624](../../../../../../reference/runtime/sand-eval-runner.cjs#L512581-L512624) | 5 | 0 | 2 | 5 | 0 | 1 |

### evaluation:512581

Chamadas escritas diretamente neste corpo: `.execute`, `.map`, `captchaScanCommand`, `captchaScanFailures.increment`, `deps.buildShellArgs`, `deps.ensureBrowserDriver`, `errorLogTag`, `new Map`, `pages.slice`, `parseCaptchaScanResult`, `process.stderr.write`, `remoteAccessor.get`.

SHA-256 do trecho: `b91fc35978e8ff219bfa6bfc18456ab22f724f26880e1890409342afd013f4e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
