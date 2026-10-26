# `isLostSessionError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706179-706181](../../../../../../../reference/runtime/host-main.cjs#L706179-L706181) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706179-706181](../../../../../../../reference/runtime/host-main.cjs#L706179-L706181) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706179

Chamadas escritas diretamente neste corpo: `ConnectError.from`.

SHA-256 do trecho: `50b5932e64a786dea9a02873044be97460baf4e3c372fbab7a4b8fe9bfa80788`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
