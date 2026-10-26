# `listenServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705497-705532](../../../../../../../reference/runtime/host-main.cjs#L705497-L705532) | `FunctionDeclaration` | sim | `server, path33, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705497-705532](../../../../../../../reference/runtime/host-main.cjs#L705497-L705532) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:705497

Chamadas escritas diretamente neste corpo: `new Promise`, `signal.throwIfAborted`.

SHA-256 do trecho: `e601d7790b403a4d6da2122cd9835dc2a107eafb5ba097adda75ec27be0e5b08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
