# `isServerSupportedAvatarDataUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495188-495190](../../../../../../../reference/runtime/host-main.cjs#L495188-L495190) | `FunctionDeclaration` | não | `dataUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495188-495190](../../../../../../../reference/runtime/host-main.cjs#L495188-L495190) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:495188

Chamadas escritas diretamente neste corpo: `dataUrl.startsWith`.

SHA-256 do trecho: `b8f5b569112efe37ce6cfbbd551febea84fde2a9af93097313082dfd6b366fbf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
