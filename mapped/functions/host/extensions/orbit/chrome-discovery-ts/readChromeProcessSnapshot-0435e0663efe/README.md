# `readChromeProcessSnapshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/chrome-discovery.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705302-705317](../../../../../../../reference/runtime/host-main.cjs#L705302-L705317) | `FunctionDeclaration` | sim | `procRoot, pidName, signal, readProcFile` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705302-705317](../../../../../../../reference/runtime/host-main.cjs#L705302-L705317) | 2 | 0 | 3 | 3 | 0 | 0 |

### host:705302

Chamadas escritas diretamente neste corpo: `parseChromeProcCmdline`, `parseProcStatIdentity`, `readProcFile`.

SHA-256 do trecho: `91ff9031a0109872a926cbf8dab5a854b8549edb3d75fc9a1b2b2900bf5779f1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
