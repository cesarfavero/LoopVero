# `reportTelemetryTokenUnavailable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482892-482901](../../../../../../../reference/runtime/host-main.cjs#L482892-L482901) | `FunctionDeclaration` | não | `reported2, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482892-482901](../../../../../../../reference/runtime/host-main.cjs#L482892-L482901) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:482892

Chamadas escritas diretamente neste corpo: `boundedErrorClass`, `reportBoxStoreDiagnostic`, `reported2.add`, `reported2.has`.

SHA-256 do trecho: `45ee7b6d672f226efe3581128c8a592ee8a91d363b3144ca29926fdc47c03fc4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
