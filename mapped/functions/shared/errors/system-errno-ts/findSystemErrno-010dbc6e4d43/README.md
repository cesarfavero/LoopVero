# `findSystemErrno`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/errors/system-errno.ts` · [README do módulo](../../../../../modules/shared/errors/system-errno-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784-786](../../../../../../reference/runtime/host-main.cjs#L784-L786) | `FunctionDeclaration` | não | `error64` |
| [evaluation:474675-474677](../../../../../../reference/runtime/sand-eval-runner.cjs#L474675-L474677) | `FunctionDeclaration` | não | `error63` |
| [state-worker:353-355](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L353-L355) | `FunctionDeclaration` | não | `error` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784-786](../../../../../../reference/runtime/host-main.cjs#L784-L786) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474675-474677](../../../../../../reference/runtime/sand-eval-runner.cjs#L474675-L474677) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:353-355](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L353-L355) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784

Chamadas escritas diretamente neste corpo: `findErrorCode`.

SHA-256 do trecho: `72b16f719f3fce60d510f1bcf94a76b8a97229dfb228ec5d8686e3193035ec86`.

### evaluation:474675

Chamadas escritas diretamente neste corpo: `findErrorCode`.

SHA-256 do trecho: `ae23a0c3e56b3bb9530062c1cda4591dad28a5d448c05ba34ba4433cadbb3d40`.

### state-worker:353

Chamadas escritas diretamente neste corpo: `findErrorCode`.

SHA-256 do trecho: `15504ce1a354c5ae44332b06b60005b812589bba7dc41aa6d430fc25e4b09b5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
