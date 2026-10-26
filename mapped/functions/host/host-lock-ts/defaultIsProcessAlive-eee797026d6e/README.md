# `defaultIsProcessAlive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-lock.ts` · [README do módulo](../../../../modules/host/host-lock-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494207-494216](../../../../../reference/runtime/host-main.cjs#L494207-L494216) | `FunctionDeclaration` | não | `pid` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494207-494216](../../../../../reference/runtime/host-main.cjs#L494207-L494216) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:494207

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `process.kill`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `b586e200b7873de1905734348a2647a7b5d2e96578294d5f04040e8786204a91`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
