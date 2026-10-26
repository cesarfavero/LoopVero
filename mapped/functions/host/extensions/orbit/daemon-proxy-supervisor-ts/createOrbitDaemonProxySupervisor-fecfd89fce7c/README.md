# `createOrbitDaemonProxySupervisor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy-supervisor.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-supervisor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705568-705615](../../../../../../../reference/runtime/host-main.cjs#L705568-L705615) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705568-705615](../../../../../../../reference/runtime/host-main.cjs#L705568-L705615) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:705568

Chamadas escritas diretamente neste corpo: `new AbortController`.

SHA-256 do trecho: `0a1200c0f4afeee3253798d832ee129262c6f2a9e2d604ce20a61d1fea252daa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
