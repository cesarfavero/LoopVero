# `readSocketIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-proxy.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-proxy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705454-705463](../../../../../../../reference/runtime/host-main.cjs#L705454-L705463) | `FunctionDeclaration` | sim | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705454-705463](../../../../../../../reference/runtime/host-main.cjs#L705454-L705463) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:705454

Chamadas escritas diretamente neste corpo: `metadata2.isSocket`, `new OrbitDaemonProxyPathError`.

Alvos de lançamento explícito: `OrbitDaemonProxyPathError`.

SHA-256 do trecho: `d4627b3c96bc3b8f59c9803e28e49176a19bd8109066dfe10058f2cda57aaff6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
