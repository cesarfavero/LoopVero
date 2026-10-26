# `hasWrappedHardTerminal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736318-736332](../../../../../../reference/runtime/host-main.cjs#L736318-L736332) | `FunctionDeclaration` | não | `error64, seen` |
| [evaluation:590010-590024](../../../../../../reference/runtime/sand-eval-runner.cjs#L590010-L590024) | `FunctionDeclaration` | não | `error63, seen` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736318-736332](../../../../../../reference/runtime/host-main.cjs#L736318-L736332) | 5 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:590010-590024](../../../../../../reference/runtime/sand-eval-runner.cjs#L590010-L590024) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:736318

Chamadas escritas diretamente neste corpo: `Array.isArray`, `classifyError2`, `fields3.errors.some`, `hasWrappedHardTerminal`, `seen.add`, `seen.has`.

SHA-256 do trecho: `f1ad37dc2162182d3d1287b3e5763523c44a01d90efc4223fb0e4d3006894953`.

### evaluation:590010

Chamadas escritas diretamente neste corpo: `Array.isArray`, `classifyError2`, `fields3.errors.some`, `hasWrappedHardTerminal`, `seen.add`, `seen.has`.

SHA-256 do trecho: `0ebd1da5e9865083b2343cf656a89bb5dbcecbec3f43e0b681969530e50ecbfb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
