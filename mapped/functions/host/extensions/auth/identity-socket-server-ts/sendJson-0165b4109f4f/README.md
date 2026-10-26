# `sendJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/auth/identity-socket-server.ts` · [README do módulo](../../../../../../modules/host/extensions/auth/identity-socket-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:499475-499487](../../../../../../../reference/runtime/host-main.cjs#L499475-L499487) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499475-499487](../../../../../../../reference/runtime/host-main.cjs#L499475-L499487) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:499475

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`, `JSON.stringify`, `String`, `args.res.end`, `args.res.writeHead`.

Alvos de atribuição ou incremento: `headers[computed]`.

SHA-256 do trecho: `2a8e9e46bd3c8e9fbbd9602a5b91e91972e3dfae6f5ba4eff27cfbaf1c04e6d6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
