# `handleAttachmentStream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493700-493753](../../../../../reference/runtime/host-main.cjs#L493700-L493753) | `FunctionDeclaration` | sim | `deps, req, res, url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493700-493753](../../../../../reference/runtime/host-main.cjs#L493700-L493753) | 12 | 1 | 3 | 6 | 1 | 1 |

### host:493700

Chamadas escritas diretamente neste corpo: `Buffer.alloc`, `Buffer.from`, `Math.min`, `decodeURIComponent`, `parseAgentId`, `parseGatewayByteRange`, `probe.mime.startsWith`, `read2`, `res.destroy`, `res.end`, `res.write`, `res.writeHead`, `respondError`, `responseDrained`, `url2.pathname.slice`, `url2.searchParams.get`.

Alvos de atribuição ou incremento: `offset2`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `ff8189fe807888a44dc82df44ab79e21119d70503f24cf9706de1278b5bd0d4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
