# `findServerRetryAfterMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736420-736444](../../../../../../reference/runtime/host-main.cjs#L736420-L736444) | `FunctionDeclaration` | não | `error64, seen` |
| [evaluation:590092-590116](../../../../../../reference/runtime/sand-eval-runner.cjs#L590092-L590116) | `FunctionDeclaration` | não | `error63, seen` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736420-736444](../../../../../../reference/runtime/host-main.cjs#L736420-L736444) | 7 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:590092-590116](../../../../../../reference/runtime/sand-eval-runner.cjs#L590092-L590116) | 7 | 1 | 0 | 5 | 0 | 0 |

### host:736420

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Math.min`, `Math.round`, `Number`, `Number.isFinite`, `error64.metadata.get`, `findServerRetryAfterMs`, `seen.add`, `seen.has`.

SHA-256 do trecho: `3eb3f22cf0027d71b19f12895307f4c91c194085ef2cb6a485b18af06a1f8b19`.

### evaluation:590092

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Math.min`, `Math.round`, `Number`, `Number.isFinite`, `error63.metadata.get`, `findServerRetryAfterMs`, `seen.add`, `seen.has`.

SHA-256 do trecho: `3e568c3276345aef1cedac7a5aab9a8022f1a19e1f5a36da596390e379f2bdb2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
