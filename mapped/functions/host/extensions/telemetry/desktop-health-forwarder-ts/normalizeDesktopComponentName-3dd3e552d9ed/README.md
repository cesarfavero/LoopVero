# `normalizeDesktopComponentName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/desktop-health-forwarder.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/desktop-health-forwarder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731341-731351](../../../../../../../reference/runtime/host-main.cjs#L731341-L731351) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731341-731351](../../../../../../../reference/runtime/host-main.cjs#L731341-L731351) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:731341

Chamadas escritas diretamente neste corpo: `DESKTOP_COMPONENT_KINDS.find`, `DESKTOP_COMPONENT_NAME_PATTERN.exec`.

Alvos de atribuição ou incremento: `scope`.

SHA-256 do trecho: `0524eaf910c7ebca5a211d515e5d8f092dcb336e72771c6f99c7455f170eff83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
