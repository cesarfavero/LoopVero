# `resolveStartupHttpProxyName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/http-proxy-name-override.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/http-proxy-name-override-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731776-731783](../../../../../../../reference/runtime/host-main.cjs#L731776-L731783) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731776-731783](../../../../../../../reference/runtime/host-main.cjs#L731776-L731783) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:731776

Chamadas escritas diretamente neste corpo: `args.store.read`.

SHA-256 do trecho: `5577967e96e19be7f19e6e229aa029c5502670f5151a53e9f16bccd633e190e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
