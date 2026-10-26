# `createIdleDestroyingAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/server-agent-proxy/idle-destroying-agent.ts` · [README do módulo](../../../../../../modules/host/extensions/server-agent-proxy/idle-destroying-agent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714151-714156](../../../../../../../reference/runtime/host-main.cjs#L714151-L714156) | `FunctionDeclaration` | não | `{   baseUrl,   idleMs }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714151-714156](../../../../../../../reference/runtime/host-main.cjs#L714151-L714156) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:714151

Chamadas escritas diretamente neste corpo: `new IdleDestroyingHttpAgent`, `new IdleDestroyingHttpsAgent`, `new URL`.

SHA-256 do trecho: `e336dc6744f9b20ba911f9fa9c08e6fafba5f0f9c0386a48c3b2907114429adc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
