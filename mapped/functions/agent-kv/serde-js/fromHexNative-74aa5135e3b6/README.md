# `fromHexNative`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-kv/serde.js` · [README do módulo](../../../../modules/agent-kv/serde-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615906-615917](../../../../../reference/runtime/host-main.cjs#L615906-L615917) | `FunctionDeclaration` | não | `clean` |
| [evaluation:284691-284702](../../../../../reference/runtime/sand-eval-runner.cjs#L284691-L284702) | `FunctionDeclaration` | não | `clean` |
| [state-worker:21700-21711](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21700-L21711) | `FunctionDeclaration` | não | `clean` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615906-615917](../../../../../reference/runtime/host-main.cjs#L615906-L615917) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:284691-284702](../../../../../reference/runtime/sand-eval-runner.cjs#L284691-L284702) | 2 | 0 | 0 | 3 | 0 | 1 |
| [state-worker:21700-21711](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21700-L21711) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:615906

Chamadas escritas diretamente neste corpo: `.write`, `Buffer.from`, `STRICT_HEX_RE.test`, `new Uint8Array`.

SHA-256 do trecho: `b291d5ee5439ad09cb25ae97612039a86d9566558f9760aebea94ec6994fd413`.

### evaluation:284691

Chamadas escritas diretamente neste corpo: `.write`, `Buffer.from`, `STRICT_HEX_RE.test`, `new Uint8Array`.

SHA-256 do trecho: `b291d5ee5439ad09cb25ae97612039a86d9566558f9760aebea94ec6994fd413`.

### state-worker:21700

Chamadas escritas diretamente neste corpo: `.write`, `Buffer.from`, `STRICT_HEX_RE.test`, `new Uint8Array`.

SHA-256 do trecho: `b291d5ee5439ad09cb25ae97612039a86d9566558f9760aebea94ec6994fd413`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
