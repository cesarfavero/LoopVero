# `withDefaultBlobReadKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/blob-read-kind.js` · [README do módulo](../../../../modules/agent-kv/blob-read-kind-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616339-616341](../../../../../reference/runtime/host-main.cjs#L616339-L616341) | `FunctionDeclaration` | não | `ctx, kind` |
| [evaluation:284879-284881](../../../../../reference/runtime/sand-eval-runner.cjs#L284879-L284881) | `FunctionDeclaration` | não | `ctx, kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616339-616341](../../../../../reference/runtime/host-main.cjs#L616339-L616341) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284879-284881](../../../../../reference/runtime/sand-eval-runner.cjs#L284879-L284881) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:616339

Chamadas escritas diretamente neste corpo: `ctx.get`, `ctx.with`.

SHA-256 do trecho: `331f13e55c55865a8cb47a663de5baf668d5e9f9cd22cd15e5665af306207200`.

### evaluation:284879

Chamadas escritas diretamente neste corpo: `ctx.get`, `ctx.with`.

SHA-256 do trecho: `331f13e55c55865a8cb47a663de5baf668d5e9f9cd22cd15e5665af306207200`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
