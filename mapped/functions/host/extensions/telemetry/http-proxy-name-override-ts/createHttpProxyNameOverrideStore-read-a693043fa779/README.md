# `createHttpProxyNameOverrideStore/read`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/http-proxy-name-override.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/http-proxy-name-override-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731752-731764](../../../../../../../reference/runtime/host-main.cjs#L731752-L731764) | `ArrowFunctionExpression` | sim | `bootId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731752-731764](../../../../../../../reference/runtime/host-main.cjs#L731752-L731764) | 3 | 0 | 0 | 5 | 0 | 1 |

### host:731752

Chamadas escritas diretamente neste corpo: `errorLogTag`, `parseOverride`, `readSandDataFileIfPresentSync`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `d9f3b027831026d804b9a335c06d9c601805b4d74f373f9db554ef972afa4e74`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
